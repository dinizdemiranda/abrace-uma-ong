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
                    <div style={{margin: "0 10px"}}>
                        <div id="coins-panel">
                            <div id="panel-left">
                                <h1>22924</h1>
                                <p>Abracoins repassados</p>
                                
                            </div>
                            <div id="panel-right">
                            <h1>17</h1>
                                <p>notas fiscais doadas</p>
                                

                            </div>
                        </div>
                    </div>
                <div id="bottom-coins-page">
                    <div id="coins-mobile">
                    <Tabs defaultIndex={1} onSelect={index => console.log(index)}>
                        <TabList>
                            <div id="coins-tabs">
                            <Tab><h4>Abracoins</h4></Tab>
                            <Tab><h4>Notas</h4></Tab>
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
