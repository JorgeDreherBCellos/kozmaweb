import 'antd/dist/antd.min.css'

import { Table, Modal, Input, Breadcrumb, Layout, Menu } from "antd";
import { useState } from "react";
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'
import '../ChangeDate/styles.css'
const { Header, Content, Footer } = Layout;

function ChangeDateTeste() {
    const [isEditing, setIsEditing] = useState(false)
    const [editingUser, setEditingUser] = useState(null)
    const [dataSource, setDataSource] = useState([
        {
            id: 1,
            name: 'John',
            email: 'john@gmail.com',
            password: '123456'
        },
        {
            id: 2,
            name: 'David',
            email: 'david@gmail.com',
            password: '123456'
        },
        {
            id: 3,
            name: 'James',
            email: 'james@gmail.com',
            password: '123456'
        },
        {
            id: 4,
            name: 'Sam',
            email: 'sam@gmail.com',
            password: '123456'
        },

    ])
    const columns = [
        {
            key: '1',
            title: 'ID',
            dataIndex: 'id'
        },
        {
            key: '2',
            title: 'Nome',
            dataIndex: 'name'
        },
        {
            key: '3',
            title: 'E-mail',
            dataIndex: 'email'
        },
        {
            key: '4',
            title: 'Senha',
            dataIndex: 'password'
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
            address: randomNumber
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
        <Layout className="layout-css">
            <Header className='header-css'>
                <div className='header-css'>
                <text>Painel Administrador</text>
                </div>
            </Header>

        <Content className="content-css">
        <div className="buttom-alg">
                <button className="buttom-css" onClick={onAddUser}>Criar usuário</button>
                </div>    
        <Table columns={columns} dataSource={dataSource}
                scroll={{
                    x: 1300 }}
                pagination={{ position: ["bottomRight"]}}
                
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
        </Content>
        <Footer footer-position='footer-position'>
            <div className='footer-css'>Teste Footer</div>
        </Footer>
        </Layout>
    )

}
export default ChangeDateTeste;