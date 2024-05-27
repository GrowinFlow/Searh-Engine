import Demo from './components/Demo';
import { SearchProvider } from './context/searchContext';
function App() {

  return (
    <>

    <SearchProvider>
      <div className=" h-screen bg-gray-600 flex justify-center items-center">
        <Demo />
      </div>

    </SearchProvider>
    </>
  );
}

export default App;
