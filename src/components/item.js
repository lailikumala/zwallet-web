import React from "react";

import { RectShape, TextBlock } from "react-placeholder/lib/placeholders";
import "react-placeholder/lib/reactPlaceholder.css";



const Item = (props) => {
  const { data } = props;
  return (
    <div>
      {/* <div>
        ini item {props.name} <br />
        ini test: {props.email}
      </div> */}
      {data == '' ? (
          <>
            <div>
                <TextBlock rows={1} style={{width: '30%', marginBottom: 25, marginTop: 25}} color='#f0f0f0'/>
                <TextBlock rows={3} color='#f0f0f0'/>
            </div>
            <div>
                <TextBlock rows={1} style={{width: '30%', marginBottom: 25, marginTop: 25}} color='#f0f0f0'/>
                <TextBlock rows={3} color='#f0f0f0'/>
            </div>
            <div>
                <TextBlock rows={1} style={{width: '30%', marginBottom: 25, marginTop: 25}} color='#f0f0f0'/>
                <TextBlock rows={3} color='#f0f0f0'/>
            </div>
            <div>
                <TextBlock rows={1} style={{width: '30%', marginBottom: 25, marginTop: 25}} color='#f0f0f0'/>
                <TextBlock rows={3} color='#f0f0f0'/>
            </div>
          </>
      ):(
          data.map((item) => {
            return (
              <div key={item.id} style={{ borderBottom: '1px solid gray' }}>
                <p>{item.name}</p>
                <p>{item.email}</p>
              </div>
            );
          })
      )}
    </div>
  );
};
export default Item;
