import React from 'react';
import PostData from './test.json'

function Servico() {
  return (
    <div>
      <h1>Servico</h1>
      {PostData.map((postDetail, index)=>{
        return(<div>
          <h1>{postDetail.title}</h1>
          <p>{postDetail.descricao}</p>
          <p>{postDetail.preco}</p>
          </div>
          )
      })}
    </div>
  );
}

export default Servico;
