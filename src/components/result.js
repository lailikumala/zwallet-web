import React from "react";
import Item from "./item";
// const ShowResult = ({valid, status, description}) => {
//   return (
//     <div>
//       <Item />
//     </div>
//   );
// };
const ShowResult = (props) => {
  console.log("semua props", props);
  const { valid, status, description, test, data } = props;
  return (
    <div>
      <Item
        valid={valid}
        status={status}
        description={description}
        test={test}
        data={data}
      />
    </div>
  );
};

export default ShowResult;
