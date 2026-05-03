import { notFound } from 'next/navigation'
import { eq } from 'drizzle-orm'
import { db } from '@/db'
import { bounties } from '@/db/schema'
import { createClient } from '@/utils/supabase/server'

interface BountyDetailPageProps {
  params: Promise<{ id: string }>
}

export default async function BountyDetailPage({ params }: BountyDetailPageProps) {
  const { id } = await params
  
  // Fetch bounty by ID
  const bounty = await db.query.bounties.findFirst({
    where: eq(bounties.id, id),
    with: {
      creator: true
    }
  })

  if (!bounty) {
    notFound()
  }

  // Check if bounty is hidden and user is not a Sheriff
  if (bounty.state === 'hidden') {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()
    
    // For now, assume no Sheriffs exist in v0 - just 404 hidden bounties
    // TODO: Check Sheriff role when user roles are implemented
    notFound()
  }

  const formatDeadline = (deadline: Date | null) => {
    if (!deadline) return 'No deadline'
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(deadline)
  }

  const getStateDisplay = (state: string) => {
    switch (state) {
      case 'draft': return 'Draft'
      case 'in_review': return 'In Review'
      case 'open': return 'Open for Submissions'
      case 'judging': return 'Under Review'
      case 'resolved': return 'Resolved'
      case 'unresolved': return 'Unresolved'
      default: return state
    }
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-4 mb-4">
          <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
            {bounty.category}
          </span>
          <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm font-medium">
            {getStateDisplay(bounty.state)}
          </span>
        </div>
        <h1 className="text-3xl font-bold mb-2">{bounty.title}</h1>
        <div className="text-gray-600 space-y-1">
          <p>Posted by {bounty.creator.display_name || 'Anonymous'}</p>
          <p>Deadline: {formatDeadline(bounty.deadline)}</p>
          {bounty.desired_output_type && (
            <p>Desired output: {bounty.desired_output_type}</p>
          )}
        </div>
      </div>

      {/* Practice prompt disclaimer */}
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-8">
        <p className="text-yellow-800 text-sm">
          <strong>Note:</strong> This is a practice prompt and not a paid work request. 
          This is for fun, learning, and community building.
        </p>
      </div>

      {/* Main content */}
      <div className="space-y-8">
        {/* Prompt description */}
        {bounty.prompt_description && (
          <section>
            <h2 className="text-xl font-semibold mb-3">What to Build</h2>
            <div className="prose max-w-none">
              <p className="whitespace-pre-wrap">{bounty.prompt_description}</p>
            </div>
          </section>
        )}

        {/* Acceptance vibes */}
        {bounty.acceptance_vibes && (
          <section>
            <h2 className="text-xl font-semibold mb-3">Acceptance Vibes</h2>
            <div className="prose max-w-none">
              <p className="whitespace-pre-wrap">{bounty.acceptance_vibes}</p>
            </div>
          </section>
        )}

        {/* What would make this fun */}
        {bounty.what_would_make_this_fun && (
          <section>
            <h2 className="text-xl font-semibold mb-3">What Would Make This Fun to Build</h2>
            <div className="prose max-w-none">
              <p className="whitespace-pre-wrap">{bounty.what_would_make_this_fun}</p>
            </div>
          </section>
        )}

        {/* Inspiration links */}
        {bounty.inspiration_links && (
          <section>
            <h2 className="text-xl font-semibold mb-3">Inspiration Links</h2>
            <div className="prose max-w-none">
              <p className="whitespace-pre-wrap">{bounty.inspiration_links}</p>
            </div>
          </section>
        )}

        {/* Submission requirements */}
        <section>
          <h2 className="text-xl font-semibold mb-3">Submission Requirements</h2>
          <div className="bg-gray-50 rounded-lg p-4">
            <ul className="space-y-2 text-sm">
              <li>• A working demo URL where we can try your build</li>
              <li>• Source code link (GitHub repo, CodePen, etc.)</li>
              <li>• Brief build notes explaining your approach</li>
              <li>• 1-3 screenshots showing key features</li>
            </ul>
          </div>
        </section>

        {/* Submissions section */}
        <section>
          <h2 className="text-xl font-semibold mb-3">Submissions</h2>
          <div className="bg-gray-50 rounded-lg p-8 text-center">
            <p className="text-gray-600">No submissions yet. Be the first to build something awesome!</p>
          </div>
        </section>
      </div>
    </div>
  )
}