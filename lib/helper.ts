
export const initialPosts = [
  {
    id: 1,
    author: 'David Adeleke',
    username: '@davido',
    avatar: '👤',
    time: '14 mins ago',
    title: 'Could North Korea handle a Covid-19 outbreak?',
    content: 'So far, the country claims to have no cases of Covid-19 - but that has...',
    likes: 2500,
    comments: 420,
    shares: 345,
    views: 45,
    sponsored: false,
    likedByUser: false,
    image: null
  },
  {
    id: 2,
    author: 'Peter Okoye',
    username: '@peterp',
    avatar: '👨',
    time: '28 mins ago',
    title: 'Disturbing Letter About Life in COVID-19 Ward in...',
    content: 'Earlier this week, British medical journal The Lancet published a...',
    likes: 2500,
    comments: 420,
    shares: 345,
    views: 45,
    sponsored: false,
    likedByUser: false,
    image: null
  },
  {
    id: 3,
    author: 'MTN Nigeria',
    username: '@mtnng',
    avatar: '📱',
    time: '1 hour ago',
    title: 'Buy the MTN 5G smartphone',
    content: 'Buy the MTN 5G smartphone and stand a chance to win a Sony headphone',
    likes: 2500,
    comments: 420,
    shares: 345,
    views: 45,
    sponsored: true,
    likedByUser: false,
    image: null
  }
];

export const initialCommunities = [
  { id: 1, name: 'Lekki Community', members: '35k', image: '🏘️', status: 'Public', joined: false },
  { id: 2, name: 'Victoria Island', members: '235k', image: '🌆', status: 'Public', joined: false },
  { id: 3, name: 'Ikeja', members: '134k', image: '🏙️', status: 'Public', joined: false },
  { id: 4, name: 'Festac', members: '2.19k', image: '🏢', status: 'Public', joined: false },
  { id: 5, name: 'Yaba Community', members: '89k', image: '🏘️', status: 'Public', joined: false },
  { id: 6, name: 'Surulere Community', members: '156k', image: '🏙️', status: 'Public', joined: false },
];

export const initialEvents = [
  {
    id: 1,
    name: 'NIGHT OF MERCY 14 - AMOS FENWA',
    date: 'Sat, Jan 18 • 10:00pm',
    location: 'Lekki',
    price: 'From $5.00',
    organizer: 'Clan Africa'
  },
  {
    id: 2,
    name: 'Election Night Watch Party',
    date: 'Sat, Jan 18 • 10:00pm',
    location: 'Lekki',
    price: 'From $5.00',
    organizer: 'WorQulture'
  },
  {
    id: 3,
    name: 'THE GREATEST SHOW ON EARTH | REVEL SATURDAYS',
    date: 'Sat, Jan 18 • 10:00pm',
    location: 'Lagos',
    price: 'From $10.00',
    organizer: 'Revel Entertainment'
  }
];

export const initialJobs = [
  {
    id: 1,
    title: 'Software Engineer',
    company: 'The Tonic Technologies LTD',
    location: 'Lekki',
    salary: 'N100k a month',
    type: 'Full-time'
  },
  {
    id: 2,
    title: 'Full-stack Software Developer',
    company: 'WorQulture',
    location: 'Lagos',
    salary: 'N350k a month',
    type: 'Full-time'
  },
  {
    id: 3,
    title: 'Administrative/Front Desk Officer',
    company: 'Clan Africa',
    location: 'Lekki',
    salary: 'N150k a month',
    type: 'Full-time'
  },
  {
    id: 4,
    title: 'Online Sales Representative',
    company: 'Shoprite',
    location: 'Lagos',
    salary: 'N80k a month',
    type: 'Part-time'
  }
];

export const initialProperties = [
  {
    id: 1,
    title: '6 bedroom duplex',
    location: 'Lekki',
    price: 'N6,000,000 /month',
    type: 'For rent',
    image: '🏠'
  },
  {
    id: 2,
    title: 'Suny apartment',
    location: 'Los Angeles',
    price: '$233 /per day',
    type: 'For rent',
    image: '🏢'
  },
  {
    id: 3,
    title: '3 bedroom apartment',
    location: 'Victoria Island',
    price: 'N3,500,000 /month',
    type: 'For rent',
    image: '🏘️'
  }
];

export const initialProviders = [
  { id: 1, name: 'Most Famous Supermarket', type: 'Supermarket', location: 'Lekki' },
  { id: 2, name: 'Shoprite', type: 'Supermarket', location: 'Lagos' },
  { id: 3, name: 'Burger kings', type: 'Eatery', location: 'Lekki' },
  { id: 4, name: 'The place', type: 'Hotel', location: 'Lekki' },
  { id: 5, name: 'Cravings', type: 'Eatery', location: 'Amuwo Odofin' },
];

export const initialNotifications = [
  {
    id: 1,
    type: 'like',
    user: 'Sarah Peterson',
    username: '@sarahp',
    action: 'liked your post',
    content: 'Could North Korea handle a Covid-19 outbreak?',
    time: '5 mins ago',
    read: false,
    avatar: '👩'
  },
  {
    id: 2,
    type: 'comment',
    user: 'Peter Okoye',
    username: '@peterp',
    action: 'commented on your post',
    content: 'Great insight! I totally agree with this perspective.',
    time: '15 mins ago',
    read: false,
    avatar: '👨'
  },
  {
    id: 3,
    type: 'follow',
    user: 'Chiamaka',
    username: '@chiamakar',
    action: 'started following you',
    content: null,
    time: '30 mins ago',
    read: false,
    avatar: '👤'
  },
  {
    id: 4,
    type: 'share',
    user: 'John Doe',
    username: '@jdoe',
    action: 'shared your post',
    content: 'Disturbing Letter About Life in COVID-19 Ward',
    time: '1 hour ago',
    read: true,
    avatar: '👨'
  },
  {
    id: 5,
    type: 'community',
    user: 'Lekki Community',
    username: '@lekkicomm',
    action: 'posted a new event',
    content: 'NIGHT OF MERCY 14 - AMOS FENWA',
    time: '2 hours ago',
    read: true,
    avatar: '🏘️'
  }
];

export const initialMessages = [
  {
    id: 1,
    user: 'Chiamaka',
    username: '@chiamakar',
    avatar: '👤',
    lastMessage: 'Hello! I\'m looking forward to having you stay in my apartment...',
    time: '2 hours ago',
    unread: 3,
    online: true,
    messages: [
      { id: 1, sender: 'them', text: 'Hello! I\'m looking forward to having you stay in my apartment. Please let me know when you come to your new appartment', time: '3 Dec 2015' },
      { id: 2, sender: 'me', text: 'Thank you for sharing', time: '3 Dec 2015' },
      { id: 3, sender: 'them', text: 'You\'re welcome! Feel free to ask any questions.', time: '2 hours ago' }
    ]
  },
  {
    id: 2,
    user: 'Peter Okoye',
    username: '@peterp',
    avatar: '👨',
    lastMessage: 'Hey! On Friday the 10th between 1:55 and 2:00 pm.',
    time: '3:03pm',
    unread: 0,
    online: false,
    messages: [
      { id: 1, sender: 'them', text: 'Hey! On Friday the 10th between 1:55 and 2:00 pm.', time: '3:03pm' },
      { id: 2, sender: 'me', text: 'Perfect! See you then.', time: '3:05pm' }
    ]
  },
  {
    id: 3,
    user: 'Lilian',
    username: '@lilian',
    avatar: '👩',
    lastMessage: 'Hey! On Friday the 10th between 1:55 and 2:00 pm.',
    time: '3:03pm',
    unread: 0,
    online: true,
    messages: [
      { id: 1, sender: 'them', text: 'Hey! On Friday the 10th between 1:55 and 2:00 pm.', time: '3:03pm' }
    ]
  },
  {
    id: 4,
    user: 'Sarah Peterson',
    username: '@sarahp',
    avatar: '👩',
    lastMessage: 'Thank you for sharing',
    time: '30 min ago',
    unread: 1,
    online: false,
    messages: [
      { id: 1, sender: 'them', text: 'Thank you for sharing', time: '30 min ago' }
    ]
  }
];

export const currentUser = {
  name: 'David Adeleke',
  username: '@davido',
  email: 'david.adeleke@example.com',
  phone: '+234 706 619 8768',
  location: 'Lagos Nigeria',
  bio: 'Hi! I am David, I really like traveling to really different countries, most often I am looking for flats that have very friendly landlords in a good location.',
  connections: '500+',
  avatar: '👤',
  joinDate: '3 Dec 2015',
  balance: 247034,
  posts: 156,
  communities: 12,
  media: 89
};