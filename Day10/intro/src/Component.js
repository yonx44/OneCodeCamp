import React, { useState, useEffect } from 'react';

const Component = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000 * 60); // Update every minute (adjust as needed)

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (

    <section style={{ backgroundColor: '#f7f6f6' }}>
    <div className="container my-5 py-5 text-dark">
      <div className="row d-flex justify-content-center">
        <div className="col-md-12 col-lg-10 col-xl-8">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <div className="card">
              <div className="card-body p-2 d-flex align-items-center">
                <div className="form-check form-switch">
                  <label className="form-check-label" htmlFor="flexSwitchCheckChecked"></label>
                </div>
              </div>
            </div>
          </div>

          {/* User 1 */}
          <div className="card mb-3">
            <div className="card-body">
              <div className="d-flex flex-start">
                <img className="rounded-circle shadow-1-strong me-3"
                  src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(26).webp" alt="avatar" width="100"
                  height="100" />
                <div className="w-100">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <h6 className="text-primary fw-bold mb-0">
                      Lara Stewart <br /><br />
                      <span className="text-dark ms-2">Hmm, This poster looks cool</span>
                    </h6>
                    <p class="mb-0">3 days ago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        <br></br>
        
          {/* User 2 */}
          <div className="card mb-3">
            <div className="card-body">
              <div className="d-flex flex-start">
                <img className="rounded-circle shadow-1-strong me-3"
                  src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(21).webp" alt="avatar" width="100"
                  height="100" />
                <div className="w-100">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <h6 className="text-primary fw-bold mb-0">
                      Sylvester Cat <br /><br />
                      <span className="text-dark ms-2">Loving your work and profile!</span>
                    </h6>
                    <p class="mb-0">1 day ago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        <br></br>

          {/* User 3 */}
          <div className="card mb-3">
            <div className="card-body">
              <div className="d-flex flex-start">
                <img className="rounded-circle shadow-1-strong me-3"
                  src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(20).webp" alt="avatar" width="100"
                  height="100" />
                <div className="w-100">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <h6 className="text-primary fw-bold mb-0">
                    Mindy Boersted <br /><br />
                      <span className="text-dark ms-2">Really cool Which filter are you using?</span>
                    </h6>
                    <p className="mb-0">{currentTime.toLocaleString()}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        
        

        </div>
      </div>
    </div>
  </section>
);
};
    
export default Component;