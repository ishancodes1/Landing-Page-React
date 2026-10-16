import React from 'react'

function App() {
  return (
    <div>
      <header>

        <div style={{backgroundColor:"green", display: "flex", flexDirection: "row", justifyContent: "space-between", height: 80, alignItems: 'center'}}>

            <a style={{display:"flex", flexDirection: "row", alignItems:"center", gap:20, color: "white"}}>
                <img src="https://cdn.dribbble.com/userupload/17795254/file/original-70477c2ab93363ef6d3bbef78052f627.jpg" alt="" style={{width:70, height:50, paddingLeft: 30}} />
                <h1>NatureSays</h1>
            </a>

            <nav>
              <ul style={{display: "flex", listStyle:"none", gap: 30, paddingRight:30}}>
                <li><a href="#home" style={{textDecoration: "none", color: "white"}}>Home</a></li>
                <li><a href="#about" style={{textDecoration: "none", color: "white"}}>About</a></li>
                <li><a href="#nature" style={{textDecoration: "none", color: "white"}}>Nature</a></li>
                <li><a href="#wildlife" style={{textDecoration: "none", color: "white"}}>Wildlife</a></li>
                <li><a href="#protect" style={{textDecoration: "none", color: "white"}}>Protect</a></li>
                <li><a href="#contact" style={{textDecoration: "none", color: "white"}}>Contact</a></li>
              </ul>         
            </nav>

        </div>

    </header>

    {/* --hero section-- */}
    <section style={{display: "flex",
                     alignItems: "center",
                     justifyContent: "center",
                     flexDirection: "column",
                     textAlign: "center",
                     backgroundImage: "url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=2200&q=90')",
                     backgroundSize: "cover",
                     backgroundPosition: "center",
                     height: "88vh",
                     gap: 50}} id="home">


        <div style={{display:"flex", flexDirection:"column", gap: 20}}>

            <div style={{color: "white", backgroundColor:"green", width:"30vw", borderRadius: 50}}>
                 ONE PLANET • ONE FUTURE
            </div>

            <h1 style={{color:"white", fontFamily: "verdana", fontSize:50}}>
                Discover the <span style={{color: "#9be7b0"}}>Wild Beauty</span> of Our Planet
            </h1>

            <p style={{color: "white", fontFamily: "Arial, Helvetica, sans-serif"}}>
                Explore breathtaking landscapes, fascinating wildlife,
                and the incredible natural world that surrounds us.
            </p>

            <div>

                <a href="#nature" style={{color: "#0b2a19", backgroundColor: "#9be7b0", textDecoration:"none", padding: 15, borderRadius: 20, marginRight: 10}}>
                    Explore Nature
                    <span>→</span>
                </a>

                <a href="#protect" style={{color: "white", border: "1px solid white", textDecoration:"none", padding: 15, borderRadius: 20, background: "rgba(255, 255, 255, 0.08)"}}>
                    Protect Our Planet
                </a>

            </div>

        </div>

        <div style={{color: "white", fontFamily:"Arial"}}>
            Scroll to explore
        </div>

    </section>
    
    {/* --about section-- */}
    <section style={{display: "flex",
                     flexDirection: "row",
                     height: "40vw",
                     justifyContent: "center",
                     alignItems: "center",
                     gap: 50
    }} id="about">
        <div>
            <img src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=90" alt="" style={{
                height: 300,
                width: 300,
                borderRadius: 30
            }}/>
        </div>
      <div style={{
        width: 500
      }}>
        <span style={{display: "inline-block",
                      color: "#4f9b68",
                      fontSize: "15px",
                      fontWeight: "1500",
                      letterSpacing: "3px"
        }}>ABOUT OUR PLANET</span>
      <h1>Nature is our greatest treasure</h1>
      <p>
                    Nature is the foundation of life on Earth. It provides
                    us with clean air, fresh water, food, shelter and
                    countless resources that make life possible.
      </p>
      <p>
        
                    Forests, rivers, mountains, oceans and wildlife are
                    all connected. Protecting these natural ecosystems
                    means protecting our future.
                
      </p>
      </div>
    </section>

    <section id="nature" style={{
     backgroundImage: "url('https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=2200&q=90')",
     height: "100vh",
     display: "flex",
     justifyContent: "center",
     alignItems: "center",
    }}> 


        <div >

            <div style={{
                textAlign: "center"
            }}>

                <span style={{
                    color: "#4f9b68",
                    fontSize: "12px",
                    fontWeight: "800",
                    letterSpacing: "3px"
                }}>
                    EXPLORE THE PLANET
                </span>

                <h2>
                    The Beauty of Nature
                </h2>

                <p style={{    color: "black",
    fontSize: "16px"}}>
                    From peaceful forests and majestic mountains to
                    flowing rivers and endless oceans, nature is filled
                    with breathtaking beauty.
                </p>

            </div>


            <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: "24px"
            }}>


                {/* <!-- FORESTS --> */}

                <article style={{
                        border: "1px solid rgba(255, 255, 255, 0.18)",
                        borderRadius: "22px",
                        background: "rgba(255, 255, 255, 0.1)",
                        height: "400px"
                }}>

                    <div style={{height: "260px"}}>

                        <img
                            src="https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1000&q=90"
                            alt="Beautiful green forest"
                        style={{height:"100%",
                                borderRadius: 10,
                                width: "356px"
                        }}/>

                    </div>


                    <div style={{color: "black"}}>

                        <h3>Forests</h3>

                        <p>
                            Forests are the lungs of our planet.
                            They provide oxygen, shelter and food
                            for countless living organisms.
                        </p>

                    </div>

                </article>



                {/* <!-- MOUNTAINS --> */}

                <article style={{
                        border: "1px solid rgba(255, 255, 255, 0.18)",
                        borderRadius: "22px",
                        background: "rgba(255, 255, 255, 0.1)",
                        height: "400px"
                }}>

                    <div style={{height: "260px"}}>

                        <img
                            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=90"
                            alt="Majestic mountains"
                        style={{height:"100%",
                                borderRadius: 10,
                                width: "356px"
                        }}
                        />


                    </div>


                    <div style={{color: "black"}}>


                        <h3>Mountains</h3>

                        <p>
                            Majestic mountains shape landscapes,
                            influence climate and provide homes
                            for unique wildlife.
                        </p>

                    </div>

                </article>



                {/* <!-- RIVERS --> */}

                <article style={{
                        border: "1px solid rgba(255, 255, 255, 0.18)",
                        borderRadius: "22px",
                        background: "rgba(255, 255, 255, 0.1)",
                        height: "400px"
                }}>

                    <div style={{height: "260px"}}>

                        <img
                            src="https://images.unsplash.com/photo-1437482078695-73f5ca6c96e2?auto=format&fit=crop&w=1000&q=90"
                            alt="River flowing through nature"
                            style={{height:"100%",
                                borderRadius: 10,
                                width: "356px"
                        }}
                        />

                    </div>


                    <div style={{color: "black"}}>

                        <h3>Rivers</h3>

                        <p>
                            Rivers bring freshwater to ecosystems
                            and communities, connecting mountains,
                            forests and oceans.
                        </p>

                    </div>

                </article>



                {/* <!-- OCEANS --> */}

                <article style={{
                        border: "1px solid rgba(255, 255, 255, 0.18)",
                        borderRadius: "22px",
                        background: "rgba(255, 255, 255, 0.1)",
                        height: "400px"
                }}>

                    <div style={{height: "260px"}}>

                        <img
                            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=90"
                            alt="Blue ocean and beach"
                            style={{height:"100%",
                                borderRadius: 10,
                                width: "356px"
                        }}
                        />

                    </div>


                    <div>

                        <h3>Oceans</h3>

                        <p>
                            Oceans cover most of our planet and
                            support an incredible variety of
                            marine life.
                        </p>

                    </div>

                </article>

            </div>

        </div>

    </section>

    <footer style={{background: "#102a1c",
                    color: "white"}}>
  <div style={{display: "grid",
    gridTemplateColumns: "1.5fr 1fr 1fr 1fr",
    gap: "50px",
    padding: "70px 0"}}>
    <div className="footer-brand">
      <a href="#home" style={{display: "flex",
    alignItems: "center",
    gap: "9px",
    color: "white",
    fontSize: "23px",
    fontWeight: "800"}}>
        <span>
          Nature<span>Says</span>
        </span>
      </a>
      <p style={{maxWidth: "320px",
                 marginTop: "20px",
                 color: "rgba(255, 255, 255, 0.6)",
                 fontSize: "14px"}}>
        Exploring the beauty of nature and inspiring people to protect our
        planet for future generations.
      </p>
    </div>
    <div style={{display: "flex",
                 flexDirection: "column",
                 gap: "10px"}}>
      <h3 style={{marginBottom: "10px",
        color: "#9be7b0",
        fontSize: "15px"
      }}>Explore</h3>
      <a href="#home" style={{color: "rgba(255, 255, 255, 0.65)",
        fontSize: "13px"
      }}>Home</a>
      <a href="#about" style={{color: "rgba(255, 255, 255, 0.65)",
        fontSize: "13px"
      }}>About Nature</a>
      <a href="#nature" style={{color: "rgba(255, 255, 255, 0.65)",
        fontSize: "13px"
      }}>Nature</a>
      <a href="#wildlife" style={{color: "rgba(255, 255, 255, 0.65)",
        fontSize: "13px"
      }}>Wildlife</a>
    </div>
    <div style={{display: "flex",
                 flexDirection: "column",
                 gap: "10px"}}>
      <h3 style={{marginBottom: "10px",
        color: "#9be7b0",
        fontSize: "15px"}}>Protect</h3>
      <a href="#protect" style={{color: "rgba(255, 255, 255, 0.65)",
        fontSize: "13px"}}>Plant Trees</a>
      <a href="#protect" style={{color: "rgba(255, 255, 255, 0.65)",
        fontSize: "13px"}}>Save Water</a>
      <a href="#protect" style={{color: "rgba(255, 255, 255, 0.65)",
        fontSize: "13px"}}>Reduce Pollution</a>
      <a href="#protect" style={{color: "rgba(255, 255, 255, 0.65)",
        fontSize: "13px"}}>Protect Wildlife</a>
    </div>
    <div style={{display: "flex",
                 flexDirection: "column",
                 gap: "10px"}}>
      <h3 style={{marginBottom: "10px",
        color: "#9be7b0",
        fontSize: "15px"}}>Follow Us</h3>
      <div style={{display: "flex",
    flexDirection: "column",
    gap: "10px"}}>
        <a href="#" style={{
    color: "rgba(255, 255, 255, 0.65)",
    fontSize: "13px"}}>
          Instagram
        </a>
        <a href="#" style={{
    color: "rgba(255, 255, 255, 0.65)",
    fontSize: "13px"}}>
          Facebook
        </a>
        <a href="#" style={{
    color: "rgba(255, 255, 255, 0.65)",
    fontSize: "13px"}}>
          Twitter
        </a>
      </div>
      <p style={{    marginTop: "15px",
    color: "#9be7b0",
    fontSize: "13px"}}>Keep Earth Green</p>
    </div>
  </div>
  <div style={{    borderTop: "1px solid rgba(255, 255, 255, 0.1)",
    padding: "20px 0"}}>
    <div style={{    display: "flex",
    justifyContent: "space-between",
    gap: "20px",
    color: "rgba(255, 255, 255, 0.45)",
    fontSize: "11px"}}>
      <p>Copyright 2026 NatureSays. All Rights Reserved.</p>
      <p>Made with Love for our planet.</p>
    </div>
  </div>
</footer>


    </div>
  )
}

export default App