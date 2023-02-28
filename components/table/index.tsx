import Image from "next/image";
import { NftProject } from "../../types/nftProject";

export function Table({ rows, headers }:{rows: NftProject[], headers: string[]}) {
    console.log("rows",rows)
  return (
    <div className="box-table table-responsive">
      <table className="table upcoming-projects">
        <thead>
          <tr>
            {headers.map((header,index) => {
              return (
                <th key={index}>
                  <span>{header}</span>
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody className="ranking">
          {rows.map((row, index) => {
            return (
              <tr className="color-light" key={index}>
                <td><span>{row.attributes.name}</span></td>
                <td><span>{row.attributes.website}</span></td>
                <td><span>{row.attributes.supply}</span></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
