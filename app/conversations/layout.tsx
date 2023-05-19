import { ReactNode } from 'react';
import SideBar from '../components/sidebar/SideBar';
import ConversationList from './components/ConversationList';
import getConversations from '../actions/getConversations';

export default async function ConversationsLayout({
  children,
}: {
  children: ReactNode;
}) {
  const conversations = await getConversations();
  return (
    // @ts-expect-error Server Compinent
    <SideBar>
      <div className="h-full">
        <ConversationList initialItems={conversations} />
        {children}
      </div>
    </SideBar>
  );
}
