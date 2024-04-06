/** @format */

import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  // Chip,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";

import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <Card className='h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 mt-14 shadow-xl shadow-blue-gray-900/5'>
      <div className='mb-2 p-4'>
        <Typography variant='h5' color='blue-gray'>
          Sidebar
        </Typography>
      </div>
      <List>
        <Link to='/dashboard'>
          <ListItem>
            <ListItemPrefix>
              <PresentationChartBarIcon className='h-5 w-5' />
            </ListItemPrefix>
            Dashboard
          </ListItem>
        </Link>
        <a href='/manage-post'>
          <ListItem>
            <ListItemPrefix>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-6 h-6'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z'
                />
              </svg>
            </ListItemPrefix>
            Manage Posts
          </ListItem>
        </a>
        <a href='/manage-blog'>
          <ListItem>
            <ListItemPrefix>
              <InboxIcon className='h-5 w-5' />
            </ListItemPrefix>
            Manage Blogs
            <ListItemSuffix></ListItemSuffix>
          </ListItem>
        </a>
        <a href='/manage-event'>
          <ListItem>
            <ListItemPrefix>
              <InboxIcon className='h-5 w-5' />
            </ListItemPrefix>
            Manage Events
            <ListItemSuffix></ListItemSuffix>
          </ListItem>
        </a>
        <a href='/manage-news'>
          <ListItem>
            <ListItemPrefix>
              <InboxIcon className='h-5 w-5' />
            </ListItemPrefix>
            Manage News
            <ListItemSuffix></ListItemSuffix>
          </ListItem>
        </a>
        <Link to='/user-settings'>
          <ListItem>
            <ListItemPrefix>
              <Cog6ToothIcon className='h-5 w-5' />
            </ListItemPrefix>
            Settings
          </ListItem>
        </Link>
        <Link>
          <ListItem>
            <ListItemPrefix>
              <PowerIcon className='h-5 w-5' />
            </ListItemPrefix>
            Log Out
          </ListItem>
        </Link>
      </List>
    </Card>
  );
}

export default Sidebar;
