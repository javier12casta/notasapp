import React, { Component } from 'react';

export default class notas extends Component {


  constructor(props: any) {
    super(props);
    this.onFileChange = this.onFileChange.bind(this);
  }

  onFileChange(e: any) {
    const file = e.target.files[0];
    console.log(file.name);
    console.log(file.size);
    console.log(file.type);
    var sha256File = require('sha256-file');
    /* let path = file.path;
    sha256File(path);
    // async/streamed (if using callback)

    sha256File('./path/to/a_file', function (error: any, sum: any) {
      if (error) return console.log(error);
      console.log(sum) 
    }) */
  }

  render() {
    return (
      <div>
        <h2>File upload using form in React</h2>
        <hr />
        <div>
          <form>
            <table>
              <tr>
                <td>Select File :</td>
              </tr>
              <tr>
                <input onChange={this.onFileChange} type="file" />
              </tr>
            </table>
          </form>
        </div>
      </div>
    )
  }
}
