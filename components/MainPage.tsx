import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Avatar, AvatarFallback } from '@/components/ui/avatar.jsx'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs.jsx'
import {
  Home,
  Users,
  ShoppingBag,
  Gift,
  Bell,
  MessageSquare,
  MapPin,
  TrendingUp,
  Calendar,
  Briefcase,
  Building2,
  User,
  Settings,
  Send,
  DollarSign,
  Menu,
  X
} from 'lucide-react'
import './App.css'

// Import components
import { PostCard } from './components/features/PostCard.jsx'
import { SearchBar } from './components/features/SearchBar.jsx'
import { NotificationsPage } from './components/pages/NotificationsPage.jsx'
import { MessagesPage } from './components/pages/MessagesPage.jsx'
import { ProfilePage } from './components/pages/ProfilePage.jsx'
import { SettingsPage } from './components/pages/SettingsPage.jsx'

// Import data
import {
  initialPosts,
  initialCommunities,
  initialEvents,
  initialJobs,
  initialProperties,
  initialProviders,
  initialNotifications,
  initialMessages,
  currentUser
} from './data/mockData.js'

function App() {
  const [activeTab, setActiveTab] = useState('home')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  // State management
  const [posts, setPosts] = useState(initialPosts)
  const [communities, setCommunities] = useState(initialCommunities)
  const [notifications, setNotifications] = useState(initialNotifications)
  const [messages, setMessages] = useState(initialMessages)

  const unreadNotifications = notifications.filter(n => !n.read).length
  const unreadMessages = messages.reduce((sum, msg) => sum + msg.unread, 0)

  // Search data - combine all searchable items
  const searchData = [
    ...posts.map(p => ({ ...p, type: 'post' })),
    ...communities.map(c => ({ ...c, type: 'community' })),
    ...initialJobs.map(j => ({ ...j, type: 'job' }))
  ]

  const handleSearch = (item) => {
    console.log('Selected:', item)
    // Navigate to the appropriate tab based on item type
    if (item.type === 'community') {
      setActiveTab('community')
    } else if (item.type === 'job') {
      setActiveTab('forsale')
    }
  }

  const handleLike = (postId, liked) => {
    setPosts(prev =>
      prev.map(post =>
        post.id === postId
          ? { ...post, likedByUser: liked, likes: liked ? post.likes + 1 : post.likes - 1 }
          : post
      )
    )
  }

  const handleJoinCommunity = (communityId) => {
    setCommunities(prev =>
      prev.map(comm =>
        comm.id === communityId
          ? { ...comm, joined: !comm.joined }
          : comm
      )
    )
  }

  const NavItem = ({ icon: Icon, label, active, onClick, badge }) => (
    <button
      onClick={onClick}
      className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all relative ${active 
          ? 'bg-primary text-primary-foreground shadow-sm' 
          : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
      }`}
    >
      <Icon className="w-5 h-5" />
      <span className="font-medium hidden lg:inline">{label}</span>
      {badge > 0 && (
        <Badge variant="destructive" className="absolute top-1 left-8 lg:left-auto lg:right-2 h-5 min-w-5 flex items-center justify-center p-1">
          {badge > 99 ? '99+' : badge}
        </Badge>
      )}
    </button>
  )

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button 
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              MCity
            </h1>
          </div>
          
          <div className="hidden md:flex flex-1 max-w-xl mx-8">
            <SearchBar 
              placeholder="Search communities, posts, people..." 
              data={searchData}
              onSearch={handleSearch}
            />
          </div>

          <div className="flex items-center gap-2">
            <Button 
              variant="ghost" 
              size="icon" 
              className="relative"
              onClick={() => setActiveTab('notifications')}
            >
              <Bell className="w-5 h-5" />
              {unreadNotifications > 0 && (
                <span className="absolute top-1 right-1 w-2 h-2 bg-destructive rounded-full"></span>
              )}
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="relative"
              onClick={() => setActiveTab('messages')}
            >
              <MessageSquare className="w-5 h-5" />
              {unreadMessages > 0 && (
                <span className="absolute top-1 right-1 w-2 h-2 bg-destructive rounded-full"></span>
              )}
            </Button>
            <Avatar 
              className="w-8 h-8 cursor-pointer"
              onClick={() => setActiveTab('profile')}
            >
              <AvatarFallback>{currentUser.avatar}</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <div className="flex gap-6">
          {/* Mobile Menu Overlay */}
          {mobileMenuOpen && (
            <div 
              className="fixed inset-0 bg-black/50 z-30 lg:hidden"
              onClick={() => setMobileMenuOpen(false)}
            ></div>
          )}

          {/* Sidebar Navigation */}
          <aside className={`
            fixed lg:sticky top-16 left-0 h-[calc(100vh-4rem)] bg-background z-40
            w-64 p-4 space-y-2
            transition-transform duration-300 ease-in-out
            ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
            lg:translate-x-0 lg:w-20 xl:w-64 lg:border-r
          `}>
            <NavItem 
              icon={Home} 
              label="Home" 
              active={activeTab === 'home'}
              onClick={() => {
                setActiveTab('home')
                setMobileMenuOpen(false)
              }}
            />
            <NavItem 
              icon={Users} 
              label="Community" 
              active={activeTab === 'community'}
              onClick={() => {
                setActiveTab('community')
                setMobileMenuOpen(false)
              }}
            />
            <NavItem 
              icon={ShoppingBag} 
              label="For Sale" 
              active={activeTab === 'forsale'}
              onClick={() => {
                setActiveTab('forsale')
                setMobileMenuOpen(false)
              }}
            />
            <NavItem 
              icon={Gift} 
              label="Rewards" 
              active={activeTab === 'rewards'}
              onClick={() => {
                setActiveTab('rewards')
                setMobileMenuOpen(false)
              }}
            />
            <NavItem 
              icon={Bell} 
              label="Notifications" 
              active={activeTab === 'notifications'}
              badge={unreadNotifications}
              onClick={() => {
                setActiveTab('notifications')
                setMobileMenuOpen(false)
              }}
            />
            <NavItem 
              icon={MessageSquare} 
              label="Messages" 
              active={activeTab === 'messages'}
              badge={unreadMessages}
              onClick={() => {
                setActiveTab('messages')
                setMobileMenuOpen(false)
              }}
            />
            
            <div className="pt-6 mt-6 border-t space-y-2">
              <NavItem 
                icon={User} 
                label="Profile" 
                active={activeTab === 'profile'}
                onClick={() => {
                  setActiveTab('profile')
                  setMobileMenuOpen(false)
                }}
              />
              <NavItem 
                icon={Settings} 
                label="Settings" 
                active={activeTab === 'settings'}
                onClick={() => {
                  setActiveTab('settings')
                  setMobileMenuOpen(false)
                }}
              />
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 min-w-0">
            {/* Home Tab */}
            {activeTab === 'home' && (
              <div className="grid lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-4">
                  {/* Mobile Search */}
                  <div className="md:hidden mb-4">
                    <SearchBar 
                      placeholder="Search..." 
                      data={searchData}
                      onSearch={handleSearch}
                    />
                  </div>

                  {/* Create Post */}
                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex gap-3">
                        <Avatar>
                          <AvatarFallback>{currentUser.avatar}</AvatarFallback>
                        </Avatar>
                        <Input placeholder="What is going on in your community?" className="flex-1" />
                        <Button>Post</Button>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Posts Feed */}
                  {posts.map(post => (
                    <PostCard 
                      key={post.id} 
                      post={post}
                      onLike={handleLike}
                    />
                  ))}
                </div>

                {/* Right Sidebar */}
                <div className="hidden lg:block space-y-4">
                  {/* Balance Card */}
                  <Card className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
                    <CardHeader>
                      <CardTitle className="text-lg">Balance</CardTitle>
                      <CardDescription className="text-primary-foreground/80">
                        Ledger balance
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold mb-2">
                        N{currentUser.balance.toLocaleString()}
                      </div>
                      <div className="text-sm text-primary-foreground/80 mb-4">
                        +N0.00 last 7 days
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <Button variant="secondary" size="sm">
                          <Send className="w-4 h-4 mr-2" />
                          Transfer
                        </Button>
                        <Button variant="secondary" size="sm">
                          <DollarSign className="w-4 h-4 mr-2" />
                          Fund
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Trending Communities */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <TrendingUp className="w-5 h-5" />
                        Trending Communities
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      {communities.slice(0, 3).map(community => (
                        <div key={community.id} className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="text-2xl">{community.image}</div>
                            <div>
                              <div className="font-medium text-sm">{community.name}</div>
                              <div className="text-xs text-muted-foreground">
                                {community.members} members
                              </div>
                            </div>
                          </div>
                          <Button 
                            size="sm" 
                            variant={community.joined ? "outline" : "default"}
                            onClick={() => handleJoinCommunity(community.id)}
                          >
                            {community.joined ? 'Joined' : 'Join'}
                          </Button>
                        </div>
                      ))}
                    </CardContent>
                  </Card>

                  {/* Upcoming Events */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Calendar className="w-5 h-5" />
                        Upcoming Events
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      {initialEvents.slice(0, 2).map(event => (
                        <div key={event.id} className="space-y-2 pb-3 border-b last:border-0 last:pb-0">
                          <div className="font-medium text-sm line-clamp-2">{event.name}</div>
                          <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            <Calendar className="w-3 h-3" />
                            {event.date}
                          </div>
                          <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            <MapPin className="w-3 h-3" />
                            {event.location}
                          </div>
                          <Button size="sm" className="w-full">Get Ticket</Button>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </div>
              </div>
            )}
