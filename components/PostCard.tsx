import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Button } from '@/components/ui/button.jsx'
import { Avatar, AvatarFallback } from '@/components/ui/avatar.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import {
  ThumbsUp,
  MessageCircle,
  Share2,
  Eye,
  ChevronRight
} from 'lucide-react'

export function PostCard({ post, onLike, onComment, onShare }) {
  const [isLiked, setIsLiked] = useState(post.likedByUser)
  const [likes, setLikes] = useState(post.likes)
  const [showComments, setShowComments] = useState(false)

  const handleLike = () => {
    const newLikedState = !isLiked
    setIsLiked(newLikedState)
    setLikes(prev => newLikedState ? prev + 1 : prev - 1)
    if (onLike) onLike(post.id, newLikedState)
  }

  const handleComment = () => {
    setShowComments(!showComments)
    if (onComment) onComment(post.id)
  }

  const handleShare = () => {
    if (onShare) onShare(post.id)
    // Show a toast or modal for sharing options
    alert(`Sharing: ${post.title}`)
  }

  const formatNumber = (num) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'k'
    }
    return num.toString()
  }

  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex gap-3 flex-1">
            <Avatar>
              <AvatarFallback>{post.avatar}</AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <CardTitle className="text-base">{post.author}</CardTitle>
                {post.sponsored && (
                  <Badge variant="secondary" className="text-xs">Sponsored</Badge>
                )}
              </div>
              <CardDescription className="flex items-center gap-2">
                {post.username} • {post.time}
              </CardDescription>
            </div>
          </div>
          <Button variant="ghost" size="icon">
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h3 className="font-semibold mb-2">{post.title}</h3>
          <p className="text-sm text-muted-foreground">{post.content}</p>
        </div>
        
        {post.image && (
          <div className="rounded-lg overflow-hidden">
            <img src={post.image} alt={post.title} className="w-full h-auto" />
          </div>
        )}
        
        <div className="flex items-center justify-between pt-4 border-t">
          <Button 
            variant={isLiked ? "default" : "ghost"} 
            size="sm" 
            className="flex items-center gap-2 transition-all"
            onClick={handleLike}
          >
            <ThumbsUp className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
            <span className="hidden sm:inline">{formatNumber(likes)}</span>
          </Button>
          <Button 
            variant="ghost" 
            size="sm" 
            className="flex items-center gap-2"
            onClick={handleComment}
          >
            <MessageCircle className="w-4 h-4" />
            <span className="hidden sm:inline">{formatNumber(post.comments)}</span>
          </Button>
          <Button 
            variant="ghost" 
            size="sm" 
            className="flex items-center gap-2"
            onClick={handleShare}
          >
            <Share2 className="w-4 h-4" />
            <span className="hidden sm:inline">{formatNumber(post.shares)}</span>
          </Button>
          <Button variant="ghost" size="sm" className="flex items-center gap-2">
            <Eye className="w-4 h-4" />
            <span className="hidden sm:inline">{formatNumber(post.views)}</span>
          </Button>
        </div>

        {showComments && (
          <div className="pt-4 border-t space-y-3">
            <div className="text-sm text-muted-foreground">
              Comments section coming soon...
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}