import React from "react"

// named -> istenilen sayda ola biler; import edende {}-den isifade etmelisen; yalniz ve yalniz ADI ile import etmelisen [as istisna]
const FirstElement = ({ ad, soyad }) => {
    return (
        // React Fragment -> dom-da elave node yaratmir. 
        <>
            <h1>salam {ad} {soyad}</h1>
            <div>----------------------------</div>
        </>
    )
}
// default-> 1 faylda yalniz 1 eded ola biler; import edende {}-e ehtiyac yoxdur;ferqli adla da import ede bilersen.
export default FirstElement;
