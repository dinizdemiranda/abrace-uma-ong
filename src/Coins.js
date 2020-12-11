import React from 'react'
import Donations from './Donations'
import Receipts from './Receipts'
import { Tabs, Tab, TabList, TabPanel } from 'react-tabs';
import './css/tabs.css'
import './css/coins.css'

const Coins = () => {

   

    return (
        <>

                
                <div id="coins-page">
                    <h2>Suas doações</h2>
                    <div style={{margin: "0 10px"}} id="dashboard">

                        <div id="balance-panel">
                            <div id="balance-total">
                            
                                <h1>4.597</h1>
                                <p>Abracoins na conta</p>
                            </div>
                            <div id="balance-cta">
                            <button id="cta">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
                                </svg>
                                Doe agora</button>
                            </div>
                        </div>
                        <div id="coins-panel">
                            <div id="panel-left">
                                <h1>22.924</h1>
                                <p>Abracoins repassados</p>
                                
                            </div>
                            <div id="panel-right">
                            <h1>86</h1>
                                <p>notas fiscais doadas</p>
                                

                            </div>
                        </div>
                    </div>
                <div id="bottom-coins-page">
                    <div id="coins-mobile">
                    <Tabs defaultIndex={0} onSelect={index => console.log(index)}>
                        <TabList>
                            <div id="coins-tabs">
                            <Tab><p>Abracoins</p></Tab>
                            <Tab><p>Notas</p></Tab>
                            </div>
                        </TabList>
                        <TabPanel>
                            <Donations />
                        </TabPanel>
                        <TabPanel>
                            <Receipts />
                        </TabPanel>
                    </Tabs>
                    </div>
                    <div id="coins-desktop">
                    <Donations limit={5} />
                    <Receipts limit={5} />
                    </div>
                </div>
                </div>
                
           

        
        </>
    )
}

export default Coins
