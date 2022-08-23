import 'antd/dist/antd.min.css'

import { Table, Modal, Input } from "antd";
import { useState } from "react";
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'
import '../ChangeDate/styles.css'

function ChangeDate() {
    const [isEditing, setIsEditing] = useState(false)
    const [editingUser, setEditingUser] = useState(null)
    const [dataSource, setDataSource] = useState([
        {
            id: 1,
            name: 'John',
            email: 'john@gmail.com',
            address: 'John Address'
        },
        {
            id: 2,
            name: 'David',
            email: 'david@gmail.com',
            address: 'David Address'
        },
        {
            id: 3,
            name: 'James',
            email: 'james@gmail.com',
            address: 'James Address'
        },
        {
            id: 4,
            name: 'Sam',
            email: 'sam@gmail.com',
            address: 'Sam Address'
        }
    ])
    const columns = [
        {
            key: '1',
            title: 'ID',
            dataIndex: 'id'
        },
        {
            key: '2',
            title: 'Name',
            dataIndex: 'name'
        },
        {
            key: '3',
            title: 'Email',
            dataIndex: 'email'
        },
        {
            key: '4',
            title: 'Address',
            dataIndex: 'address'
        },
        {
          key:"5",
          title:'Actions',
          render:(record)=>{
            return (
            <>
            <EditOutlined onClick={()=>{
                onEditUser(record)
            }} />

            <DeleteOutlined onClick={()=>{
                onDelete(record)
            }} style={{color: "red", marginLeft: 12}}
            />
            </>
            )
          } 
        },
    ]
    const onAddUser = () => {
        const randomNumber = parseInt(Math.random() * 1000)
        const newUser = {
            id: randomNumber,
            name: "Name" + randomNumber,
            email: randomNumber + '@gmail.com',
            address: 'Address' + randomNumber
        }
        setDataSource((pre) => {
            return [...pre, newUser]
        })
    }

    const onDelete=(record)=>{
        Modal.confirm({
            title: 'Gostaria de remover o usuário?',
            okText: 'Sim',
            okType: 'danger',
            cancelText: 'Não',
            onOk:()=>{
                setDataSource((pre)=>{
                    return pre.filter(user => user.id !== record.id)
                 });
            },
        });
    };

    const onEditUser=(record) => {
        setIsEditing(true)
        setEditingUser({ ...record})
    };

    const resetEditing=()=>{
        setIsEditing(false);
        setEditingUser(null);
    }

    return (
        <div className="container">
            <header className="header-css">
                <div className="buttom-alg">
                <button className="buttom-css" onClick={onAddUser}>Criar usuário</button>
                </div>
                <Table columns={columns} dataSource={dataSource}
                pagination={{ position: ["topRight"] }}
               
                ></Table>
                    <Modal
                    title= "Editar usuário"
                    okText= 'Sim'
                    cancelText= 'Não'
                    visible={isEditing}
                    onCancel={()=>{
                        resetEditing()
                    }}
                    onOk={()=>{
                        setDataSource(pre=>{
                            return pre.map(user=>{
                                if(user.id === editingUser.id){
                                    return editingUser
                                }else{
                                    return user;
                                }
                            });
                        })
                        resetEditing()
                        setIsEditing(false)
                    }}
                    >
                        <Input value={(editingUser?.name)} onChange={(e)=>{
                            setEditingUser(pre=>{
                                 return {...pre, name:e.target.value}        
                            })
                        }}/>
                        <Input value={(editingUser?.email)} onChange={(e)=>{
                            setEditingUser(pre=>{
                                 return {...pre, email:e.target.value}        
                            })
                        }}
                        />
                        <Input value={(editingUser?.address)} onChange={(e)=>{
                            setEditingUser(pre=>{
                                 return {...pre, address:e.target.value}        
                            })
                        }}
                        />
                    </Modal>
                
            </header>
        </div>
    )

}
export default ChangeDate;