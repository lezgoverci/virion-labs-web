import Image from "next/image";
import { NftProject } from "../../types/nftProject";

export function Table({
  rows,
  headers,
}: {
  rows: NftProject[];
  headers: string[];
}) {
  return (
    <div className="box-table table-responsive">
      <table className="table upcoming-projects">
        <thead>
          <tr>
            {headers.map((header, index) => {
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
                <td>

                    <a
                      href="author.html"
                      className="avatar"
                      data-tooltip="John Due"
                    >
                      <Image
                        width="60px"
                        height="60px"
                        src="assets/images/client/client-5.png"
                        alt="Nft_Profile"
                        style={{borderRadius: "60px"}}
                      />
                    </a>


                </td>
                <td>
                  <span>

                    {row?.attributes.name}
                  </span>
                </td>
                <td>
                  <span>{row?.attributes.website}</span>
                </td>
                <td>
                  <span>{row?.attributes.blockchain?.name}</span>
                </td>
                <td>
                  <span>
                    {row?.attributes.price}{" "}
                    {row?.attributes.blockchain.currency}
                  </span>
                </td>
                <td>
                  <span>{row?.attributes.supply}</span>
                </td>
                <td>
                  <span>
                    {new Date(row?.attributes.drop_date).toLocaleDateString()}
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
