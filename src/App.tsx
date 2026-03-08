import ProfileSidebar from './components/ProfileSidebar';
import Tabs from './components/Tabs';

function App() {
  return (
    <div className="flex flex-row min-h-screen">
      <ProfileSidebar />
      <Tabs />
    </div>
  );
}

export default App;
