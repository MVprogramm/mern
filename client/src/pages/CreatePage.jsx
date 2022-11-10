import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import { useGenerateMutation } from "../store/app.api";

const CreatePage = () => {
  const [link, setLink] = useState('')
  const [generate, { data: generatedLink, error: generatedError }] = useGenerateMutation()
  const history = useHistory()

  useEffect(() => {
    if (generatedLink) {
      console.log('link: ', generatedLink)
      history.push(`/detail/${generatedLink.link._id}`)
    }

    if (generatedError) {
      console.log('error: ', generatedError)
    }
  }, [generatedLink, generatedError])
  
  const pressHandler = async (event) => {
    if (event.key === 'Enter') {
      await generate({from: link})
    }
    setLink('')

  }
  return (
    <div className="row">
      <div className="col s8 offset-s2" style={{ paddingTop: '2rem' }}>
        <h2 style={{textAlign: "center"}}>MAKE YOUR FAVOURITE LINK SHORTER</h2>
        <div className="input-field">
          <input 
            id="link"
            name="link"
            type="text"
            onChange={(event) => setLink(event.target.value)}
            onKeyPress={pressHandler}
            value={link}
          />
          <label className="inp_link" htmlFor="link">Link</label>
        </div>
      </div>
    </div>
  );
};

export default CreatePage;
