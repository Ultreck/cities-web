import { ProfilePage } from '@/components/pages/ProfilePage'
import { currentUser, initialPosts } from '@/lib/helper'
import React from 'react'

const UserProfilePage = () => {
  return (
    <div>
        <ProfilePage posts={initialPosts} user={currentUser} />
    </div>
  )
}

export default UserProfilePage