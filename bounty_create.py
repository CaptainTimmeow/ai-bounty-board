"""Bounty creation flow.
Addresses issue #7: Post a bounty (create flow)
"""

from dataclasses import dataclass
from datetime import datetime
from typing import Optional, List


@dataclass
class CreateBountyRequest:
    title: str
    description: str
    amount: float
    currency: str = "USD"
    deadline_days: int = 30
    tags: List[str] = None
    category: str = "general"


@dataclass
class CreateBountyResponse:
    bounty_id: str
    title: str
    status: str
    created_at: str


class BountyCreateService:
    def __init__(self, db):
        self.db = db

    def create_bounty(self, request: CreateBountyRequest, user_id: str) -> CreateBountyResponse:
        if not request.title or len(request.title.strip()) < 3:
            raise ValueError("Title must be at least 3 characters")
        if request.amount <= 0:
            raise ValueError("Amount must be positive")

        bounty_id = f"bty_{datetime.now().strftime('%Y%m%d%H%M%S')}_{user_id[:8]}"
        bounty = {
            "id": bounty_id,
            "title": request.title,
            "description": request.description,
            "amount": request.amount,
            "currency": request.currency,
            "creator_id": user_id,
            "status": "open",
            "tags": request.tags or [],
            "category": request.category,
            "created_at": datetime.now().isoformat(),
        }
        self.db.insert("bounties", bounty)

        return CreateBountyResponse(
            bounty_id=bounty_id,
            title=request.title,
            status="open",
            created_at=bounty["created_at"],
        )

    def validate_bounty(self, request: CreateBountyRequest) -> List[str]:
        errors = []
        if not request.title or len(request.title.strip()) < 3:
            errors.append("Title too short")
        if request.amount <= 0:
            errors.append("Invalid amount")
        if request.deadline_days < 1 or request.deadline_days > 365:
            errors.append("Deadline must be 1-365 days")
        return errors
