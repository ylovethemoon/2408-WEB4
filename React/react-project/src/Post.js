import React from 'react'


// props : properties
export default function Post(props) {
    return (
    <div className='post' style={
        {
            border:'1px solid #222',
            borderRadius: '100px',
            marginBottom: '24px',
            backgroundColor: 'pink'           
        }
    }>
        <h3>{props.제목}</h3>
        <p>{props.내용}</p>
    </div>
    )
}