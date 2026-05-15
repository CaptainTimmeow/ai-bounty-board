"""Bounty detail page handler.
Addresses issue #8: View a bounty (detail page)
"""

from typing import Optional, Dict, Any
from datetime import datetime


class BountyDetailService:
    def __init__(self, db):
        self.db = db

    def get_bounty_detail(self, bounty_id: str) -> Optional[Dict[str, Any]]:
        bounty = self.db.get("bounties", bounty_id)
        if not bounty:
            return None

        # Enrich with computed fields
        now = datetime.now()
        created = datetime.fromisoformat(bounty["created_at"])
        days_open = (now - created).days

        return {
            "id": bounty["id"],
            "title": bounty["title"],
            "description": bounty["description"],
            "amount": bounty["amount"],
            "currency": bounty["currency"],
            "status": bounty["status"],
            "creator_id": bounty["creator_id"],
            "assignee_id": bounty.get("assignee_id"),
            "tags": bounty.get("tags", []),
            "category": bounty.get("category", "general"),
            "created_at": bounty["created_at"],
            "days_open": days_open,
            "is_expired": days_open > bounty.get("deadline_days", 30),
            "submissions_count": bounty.get("submissions_count", 0),
        }

    def get_bounty_activity(self, bounty_id: str) -> list:
        """Get activity log for a bounty."""
        return self.db.query(
            "SELECT * FROM bounty_activity WHERE bounty_id = ? ORDER BY created_at DESC",
            [bounty_id]
        )
