
function Home() {
  return (
    <>
        <div style={{
            backgroundColor: "#312e81",
            display: "flex",
            justifyContent: "center"
        }}>
            <div style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                color: "white",
                width: "100%",
                maxWidth: "1280px",
            }}>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                    alignItems: "center",
                    justifyContent: "center",
                    paddingTop: "1rem",
                    paddingBottom: "1rem"
                }}>
                    <h2 style={{
                        fontSize: "3rem",
                        fontWeight: "bold"
                    }}>
                        Welcome to our community!
                    </h2>
                    <p style={{
                        fontSize: "1.25rem"
                    }}>
                        Share your thoughts here
                    </p>
                    <div style={{
                        display: "flex",
                        justifyContent: "space-around",
                        gap: "1rem"
                    }}>
                        <div style={{
                            borderRadius: "0.5rem",
                            color: "white",
                            border: "2px solid white",
                            padding: "0.5rem 1rem"
                        }}> 
                            New Post 
                        </div>
                    </div>
                </div>
                <div style={{
                    display: "flex",
                    justifyContent: "center"
                }}>
                    <img src="http://i.imgur.com//fyfri1v.png"
                    alt="Home page image"
                    style={{
                        width: "66%"
                    }}/>
                </div>
            </div>
        </div>
    </>
  )
}

export default Home