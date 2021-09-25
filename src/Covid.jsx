import React, { useState, useEffect } from 'react'

const Covid = () => {
    const [call, setCall] = useState([]);

    const getData = async () => {
        try{
        const res = await fetch('https://data.covid19india.org/data.json');
        const actualData = await res.json();
        console.log(actualData.statewise);
        setCall(actualData.statewise[35])
    }catch(err){
        console.log(err);
    }
    }
    useEffect(() => {
        getData();
    }, [])
    return (
        <>
            <div className="text-center pt-5 tba">
                <h1>COVID 19
                    <hr className="w-25 mx-auto" />
                </h1>
            </div>
            <div className="container-fluid pt-5 mb-5">
                <div className="row">
                    <div className=" col-10 mx-auto">
                        <div className="row gy-4">
                            {/*  */}
                            <div className="col-md-4 col-10 mx-auto">
                                <div className="card bg-secondary">

                                    <div className="card-body">
                                        <h5 className="card-title"> State
                                        </h5>
                                        <p className="card-text">{call.state}</p>

                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-10 mx-auto">
                                <div className="card">

                                    <div className="card-body bg-success">
                                        <h5 className="card-title">Recoverd
                                        </h5>
                                        <p className="card-text">{call.recovered}</p>

                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-10 mx-auto">
                                <div className="card bg-primary">

                                    <div className="card-body ">
                                        <h5 className="card-title">Confirmed
                                        </h5>
                                        <p className="card-text">{call.confirmed}</p>

                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-10 mx-auto">
                                <div className="card bg-danger">

                                    <div className="card-body">
                                        <h5 className="card-title">Death
                                        </h5>
                                        <p className="card-text">{call.deaths}</p>

                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-10 mx-auto">
                                <div className="card bg-info">

                                    <div className="card-body">
                                        <h5 className="card-title">Active
                                        </h5>
                                        <p className="card-text">{call.active}</p>

                                    </div>
                                </div>
                            </div>
                            
                            {/*  */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Covid;
