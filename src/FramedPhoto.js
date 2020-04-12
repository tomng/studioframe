import React from "react";
import "./styles.css";

import loadImage from "blueimp-load-image";

class FramedPhoto extends React.Component {
  state = {
    imageUrl: "",
    captionText: "Adventure."
  };

  unsplashAccessKey = "kqwCGKkLfGAPTK3YhSQxwrNKsQ48BZeO0x9Pb3_YprU";

  componentDidMount() {
    this.loadNextPhoto();
  }

  loadNextPhoto() {
    this.loadNextImageFromTestSet();
    // this.loadNextImageFromUnsplash();
  }

  loadNextImageFromUnsplash() {
    /* Using cors-anywhere as proxy */

    fetch(
      "https://api.unsplash.com/photos/random?client_id=" +
        this.unsplashAccessKey,
      {}
    )
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data);
        this.setState({ imageUrl: data.urls.raw });
        this.setState({ captionText: data.description });
      });
  }

  render() {
    return (
      <div>
        <div className="framedPhoto">
          <div className="photoContainer">
            <img
              onClick={() => this.loadNextPhoto()}
              alt="Framed Photograph"
              src={this.state.imageUrl}
              onAnimationIteration={this.onAnimationIteration}
            />
            <div>
              <h1>{this.state.captionText}</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }

  onAnimationIteration = () => {
    this.loadNextPhoto();
  };

  photoUrls = [
    "https://lightroom.adobe.com/v2c/spaces/74292436523e4d7d888c912c21c9969e/assets/822f19e7abfdfce51b3ceaea95f4fa3f/revisions/91a5a5bfe2544aa1af4a09aff2ebda86/renditions/e7a888a01acb3cfddaca25276bc3f9b4",
    "https://lightroom.adobe.com/v2c/spaces/74292436523e4d7d888c912c21c9969e/assets/7c9a983feb161912df9c305af5c92ed9/revisions/841816fa0861438bb538bf331366a534/renditions/64e3eeda1f319d7ccd525b482cdd8686",
    "https://lightroom.adobe.com/v2c/spaces/74292436523e4d7d888c912c21c9969e/assets/6bddf21fef207e034a6158126d635903/revisions/7f812729bed8454586224b1066050b6b/renditions/073b82b90dbfd2abe99c72a3e7603e4c",
    "https://lightroom.adobe.com/v2c/spaces/74292436523e4d7d888c912c21c9969e/assets/83cb62f7436fefc0253ca0f267b6c0ac/revisions/cb2058fe39f944e281f8ae238f09c785/renditions/655970908c55c6f40c116fdd997be8f5",
    "https://lightroom.adobe.com/v2c/spaces/74292436523e4d7d888c912c21c9969e/assets/27879273e4cebadfe154c4ff68815bcc/revisions/cad5160a12d74ecb9db11ba098df2cb4/renditions/13406f828cd18184d1b155b626deff82",
    "https://lightroom.adobe.com/v2c/spaces/74292436523e4d7d888c912c21c9969e/assets/d0842ac8b4c29a52bf2afb3c016b8aac/revisions/48743617e37c43d6b7eb8ec8ec3f694d/renditions/3efe513bd1de15d6fc76dde03c65d6d2",
    "https://lightroom.adobe.com/v2c/spaces/74292436523e4d7d888c912c21c9969e/assets/b143f67e95d2c258e7506b77af9cfebc/revisions/aa998dfcf1a8492dbdaff5268142cfb1/renditions/a0faca6f374bc74ba04cc966b4ebb54e",
    "https://lightroom.adobe.com/v2c/spaces/74292436523e4d7d888c912c21c9969e/assets/a87d72ba666c890bc0e1f209aaa0439d/revisions/c14cbbce2b964054a7eb6e1fa798cb66/renditions/8471a8e6789b26a3e14bf3654fb96460",
    "https://lightroom.adobe.com/v2c/spaces/74292436523e4d7d888c912c21c9969e/assets/7515a7562819ec60b0667100c2442177/revisions/4c47f0bef2c24bc4867b96e9a44004b7/renditions/a20f7029e3ceec9f7e1a7cefadd1e11e",
    "https://lightroom.adobe.com/v2c/spaces/74292436523e4d7d888c912c21c9969e/assets/0d1218bf55ffbe681b23dcc12dcd5969/revisions/2ba713ca70114d34b3fad69e5655aebe/renditions/fd49ba81e712042f7de4a1042acd33a5",
    "https://lightroom.adobe.com/v2c/spaces/74292436523e4d7d888c912c21c9969e/assets/cbdc5f8ffd5e9d0cc26e72b2abdd87a6/revisions/1df247f13e504c28bf307602f2e5a98e/renditions/5bcef7f52d7e5deaa8344f857c003f3a",
    "https://lightroom.adobe.com/v2c/spaces/74292436523e4d7d888c912c21c9969e/assets/a18511f845d49c373095ed0c95d2edb9/revisions/3e3da1914753490182cf75d5e5af1219/renditions/993350b4c77577319ff512391b4a3f0b"
  ];

  /*
  photoUrls = [
    "https://picsum.photos/1920/1080",
    "https://picsum.photos/1920.webp"
  ];
  */

  /*
  photoUrls = [
    "https://images.unsplash.com/photo-1463936575829-25148e1db1b8?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=thomas-verbruggen-5A06OWU6Wuc-unsplash.jpg&w=2400"
  ];
  */

  currentPhotoIndex = 0;

  getNextImageUrl() {
    this.currentPhotoIndex =
      (this.currentPhotoIndex + 1) % this.photoUrls.length;
    return this.photoUrls[this.currentPhotoIndex];
  }

  loadNextImageFromTestSet() {
    this.setState({ imageUrl: this.getNextImageUrl() });
    loadImage(
      this.state.imageUrl,
      (image, data) => {
        if (data !== undefined) {
          // console.log("Data: ", data);
          // this.setState({
          //   captionText: data.originalWidth + " × " + data.originalHeight
          // });
        }
        if (data !== undefined && data.exif !== undefined) {
          console.log("EXIF data: ", data.exif);
          console.log(data.exif.getAll());
        }

        if (data !== undefined && data.iptc !== undefined) {
          console.log("IPTC data: ", data.iptc);
          console.log(data.iptc.getAll());
        }
      },
      {
        meta: true
      }
    );
  }
}

export default FramedPhoto;
