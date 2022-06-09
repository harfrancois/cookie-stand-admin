import { hours } from "../data"

export default function Table({ locations }) {

  function calculateTotal() {
    let grandTotal = 0;
    let hourlyTotal = []
    for (let i = 0; i < hours.length; i++) {
      let hour = 0;
      locations.map(sale => {
        hour += sale.hourlySales[i]
      })
      hourlyTotal[i] = hour
    }
    grandTotal = hourlyTotal.reduce((acc, curr) => acc + curr)
    hourlyTotal[hours.length] = grandTotal;
    return (hourlyTotal)
  }


  if (locations.length > 0) {
    return (
       <div className="justify-center relative flex py-6">

          <table className="flex-wrap w-1/2 p-2  bg-purple-500 rounded-md">

            <thead className="p-2 border border-black">
              <tr className="p-2 border border-black">
                <th className="p-2 border border-black">Location</th>
                {hours.map(hour =>
                  <th className="p-2 border border-black">{hour}</th>
                )}
                <th className="p-2 border border-black">Total</th>
              </tr>
            </thead>

            <tbody className="p-2 border border-black">
                {locations.map(location => {
                    return (
                      <tr className="p-2 border border-black">
                        <td className="p-2 border border-black">{location.location}</td>
                        {location.hourlySales.map(Sale => {
                          return (
                            <td className="p-2 border border-black">{Sale}</td>
                          );
                        })}
                        <td className="p-2 border border-black">{location.hourlySales.reduce((acc, curr) => acc + curr)}</td>
                      </tr>
                    );
                })}
            </tbody>

            <tfoot className="p-2 border border-black">
              <tr className="p-2 border border-black">
                <th className="p-2 border border-black">Total</th>
                {calculateTotal().map(total =>
                    <th className="p-2 border border-black">{total}</th>
                  )}
              </tr>
            </tfoot>

          </table>

       </div>
    )
  } else {
    return <a className="justify-center relative flex py-6">No Data Available</a>
  }
}