import logo from './logo.svg';
import './App.css';
import Post from './Post'

  // 실제로 렌더링 되는것은 return 안에 있는 요소들이기 때문에
  // 구조가 같은 위치에 있으면 안된다. 같은 그룹으로 묶여야 함.
function App() {
  const element = <h1 className='title'>안녕하세요 h1입니다</h1>
  const data = [{
      title : '첫글은 내꺼야',
      text : '반갑습니다'
    },{
      title : '오늘은 화요일',
      text : '왜 아직 화요일?'
    },{
      title : '내일은 수요일',
      text : '왜 아직 수요일?'
    },{
      title : '금요일은 언제와?',
      text : '금요일도 사실 별로'
    }]

  return (
    <div className="App">
      {element}
      {/* {data.map((value,key)=> {
        return <p>{value.title}</p>
      })} */}
      {/* 위 아래 두개가 같은 작성임. */}
      
      {data.map((value,key)=> 
        <p>{value.title}</p>
      )}

      {data.map((value,key)=> 
        <Post 제목={value.title} 내용={value.text}></Post>
      )}

      {/* <div className='post'>
        <h3>게시물제목</h3>
        <p>lorem ipsum 어쩌구저쩌구</p>
      </div> */}

      {/* props로 만든 Post.js 파일 참고 */}
      {/* <Post 제목='안녕하세요' 내용='반갑습니다'></Post>
      <Post 제목='안녕하세요' 내용='배고파요'></Post> */}


    </div>
  );
}

export default App;
