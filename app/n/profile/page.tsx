import React from 'react'
import { ProfilePage } from '@/components/pages/ProfilePage'
import { currentUser, initialPosts } from '@/lib/helper'

const UserProfilePage = () => {
  return (
    <div>
        <ProfilePage 
         user={currentUser} />
    </div>
  )
}

export default UserProfilePage