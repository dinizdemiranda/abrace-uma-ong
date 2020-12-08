   ongs.map((o)=>(
                    
                    <div className="item">
                    <div id="project" className="content">
                        <img src={o.photo} alt={o.name} />
                <h3>{o.name}</h3>
                <p>{o.location}</p>
                <p>{joca + ' - ' +ongs.length}</p>
                    </div>
                    </div>
                ))