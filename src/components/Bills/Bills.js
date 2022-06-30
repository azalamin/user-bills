
const Bills = () => {
    return (
      <>
        <div class="navbar bg-base-200">
          <div class="flex-1 mx-6 lg:mx-12">
            <a class="btn btn-ghost normal-case text-xl">LOGO</a>
          </div>
          <div class="flex-none px-6 lg:px-12">
            <p>Paid Total: </p>
          </div>
        </div>
        <div className="flex justify-between items-center mx-6 lg:mx-12 bg-base-200 mt-10 mb-5 py-3 px-5">
          <div className="flex items-center w-[50%]">
            <h3 className="mr-10">Billings</h3>
            <input
              class="w-[60%] block px-3 py-1 border-black border text-black"
              type="text"
              placeholder="Search"
            />
          </div>
          <div className="w-[50%] flex justify-end">
            <button className="bg-black text-white px-4 py-1 hover:bg-[#000000c6]">Add New Bill</button>
          </div>
        </div>
        <div class="overflow-x-auto px-6 lg:px-12">
          <table class="table table-compact w-full">
            <thead>
              <tr>
                <th>Billing ID</th>
                <th>Full Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Paid Amount</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Cy Ganderton</td>
                <td>Quality Control Specialist</td>
                <td>Littel, Schaden and Vandervort</td>
                <td>Canada</td>
                <td>12/16/2020</td>
                <td>Blue</td>
              </tr>
              <tr>
                <td>Hart Hagerty</td>
                <td>Desktop Support Technician</td>
                <td>Zemlak, Daniel and Leannon</td>
                <td>United States</td>
                <td>12/5/2020</td>
                <td>Purple</td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    );
};

export default Bills;