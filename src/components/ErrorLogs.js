import React, { useState } from 'react';
import { Modal, Button } from 'antd';

const ErrorLogs = (props) => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    
    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    return(
        <div>
            <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
           </Modal>
           <div style={{fontSize:"30px", textAlign:"center", fontFamily:"Ubuntu"}}>
            <p>{props.message.code}</p>
            <p>{props.message.message}</p>
           </div>
        </div>

    )
}

export default ErrorLogs;

// import React, { useState } from 'react';
// import { Modal, Button } from 'antd';

// const App = () => {
//   const [isModalVisible, setIsModalVisible] = useState(false);

//   const showModal = () => {
//     setIsModalVisible(true);
//   };

//   const handleOk = () => {
//     setIsModalVisible(false);
//   };

//   const handleCancel = () => {
//     setIsModalVisible(false);
//   };

//   return (
//     <>
//       <Button type="primary" onClick={showModal}>
//         Open Modal
//       </Button>
//       <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
//         <p>Some contents...</p>
//         <p>Some contents...</p>
//         <p>Some contents...</p>
//       </Modal>
//     </>
//   );
// };

// ReactDOM.render(<App />, mountNode);