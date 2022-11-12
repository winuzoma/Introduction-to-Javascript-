*{
    padding: 0px;
    margin: 0px;
    box-sizing: border-box;
}

.corousel-container{
    width: 700px;
    margin: auto;
    border: 5px solid black;
    overflow: hidden;
    position: relative;
}

.corousel-slide{
    display: flex;
    width: 100%;
    height: 500px;
}

#prevBtn{
   position: absolute;
   top: 50%;
    z-index: 10;
    left: 5%;
    font-size: 30px;
    color: white;
    cursor: pointer;
}

#nextBtn{
    position: absolute;
    top: 50%;
     z-index: 10;
     right: 5%;
     font-size: 30px;
     color: white;
     cursor: pointer;
 }
