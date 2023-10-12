import React from "react"

// named -> istenilen sayda ola biler; import edende {}-den isifade etmelisen; yalniz ve yalniz ADI ile import etmelisen [as istisna]
export const FirstElement = ({ ad, soyad }) => {
    return (
        // React Fragment -> dom-da elave node yaratmir. 
        <>
            <div>salam {ad} {soyad}</div>
            <h1>salam {ad} {soyad}</h1>
        </>
    )
}
export const ali = 'alai'
// default-> 1 faylda yalniz 1 eded ola biler; import edende {}-e ehtiyac yoxdur;ferqli adla da import ede bilersen.
// export default FirstElement;
