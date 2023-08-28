import { Profile } from "./components/Profile/Profile";
import { Statistics } from "./components/Statistics/Statistics";
import { FriendList } from "components/FriendList/FriendList";
import { TransactionHistory } from "components/TransactionHistory/TransactionHistory";
import user from './user.json';
import data from './data.json';
import friends from './friends.json';
import transactions from './transactions.json';

export const App = () => {
  return (
    <div
      style={{
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
				flexWrap: 'wrap',
				gap: '20px',
        alignItems: 'center',
        fontSize: 20,
        color: '#010101',
				backgroundColor: '#E7ECF2',
				padding: '50px'
      }}
    >
			<Profile
				username={user.username}
				tag={user.tag}
				location={user.location}
				avatar={user.avatar}
				stats={user.stats}
			/>
			<Statistics
				title="Upload stats"
				stats={data}
			/>
			<FriendList
				friends={friends}
			/>
			<TransactionHistory
				items={transactions}
			/>
    </div>
  );
};

