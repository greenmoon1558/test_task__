import React from 'react';
import PropTypes from 'prop-types';
import BackgroundSettingsItem from "./backgroundSettingItem";
import Button from "./button";
import defaultBackground from './../../public/images/defaultBackground.jpg';
function BackgroundSettings(props) {
    let items = props.backgroundSettings.items;
    return (
        <article calss="modal-window__article">
        <div class="imagemediatype__container">
            <div class="buttons__container">
                <Button title="Color"></Button>
                <Button title="Image"></Button>
                <Button title="Video"></Button>
            </div>
            <div class="image__container">
                <Button icon_type="upload" title="Upload"></Button>
                <Button icon_type="gallery" title="Gallery"></Button>
            </div>
        </div>
        {Object.keys(items).map(item=>
            <BackgroundSettingsItem key={item} title={item} content={items[item]}>
            </BackgroundSettingsItem>)}
        </article>
    );
  }

let photoFilter = {
          "B&W":{
              backgroundImage: 'url('+defaultBackground+')' ,
              filter: "grayscale(100%)"
          },
          "Darken":{
                backgroundImage: 'url('+defaultBackground+')',
                 filter: "brightness(75%)" 
          },
          "Blurry":{
                backgroundImage:'url('+defaultBackground+')' ,
                filter: "blur(1.5px)"
          },
          "Lighten":{
                backgroundImage: 'url('+defaultBackground+')',
                filter: "brightness(125%)"  
          },
          "Radiance":{
                backgroundImage:'url('+defaultBackground+')',
                filter:"brightness(185%) contrast(90%)" 
          },
          "Bloom":{
                backgroundImage:'url('+defaultBackground+')',
                filter:"brightness(140%) contrast(75%)" 
          },
          "Sepia":{
                backgroundImage: 'url('+defaultBackground+')',
                filter: "sepia(100%)"
          },
          "Tint":{
                backgroundImage: 'url('+defaultBackground+')',
                filter: "brightness(130%) hue-rotate(-25deg)"
          }
        };

let colors = {
          "solid": [
                {
                    "backgroundColor": "#fff"
                }, 
                {
                    "backgroundColor": "#ee7b67"
                }, 
                {
                    "backgroundColor": "#2195f4"
                }, 
                {
                    "backgroundColor": "#d944fb"
                }, 
                {
                    "backgroundColor": "#323435"
                } ],
          "gradient": [
            {
                "backgroundImage": "linear-gradient(46deg, #e7e7e7, #ffffff)"
            },
            {
                "backgroundColor": "#ee7b67",
                "backgroundImage": "linear-gradient(46deg, #c0513e, #ee7b67)",
            },
            {
                "backgroundColor": "#2195f4",
                "backgroundImage": "linear-gradient(46deg, #005296, #2195f4)"
            },
            {
                "backgroundColor": "#d944fb",
                "backgroundImage": "linear-gradient(46deg, #aa1ccb, #d944fb)"
            },
            {
                "backgroundColor": "#323435",
                "backgroundImage": "linear-gradient(46deg, #5b6a72, #323435)"
            }]
        };

let mediaTypes = {
          "color": "#2195f4",
          "image": "../public/assets/defaultBackground.png",
          "video": ""
        };

let overlay = { 0: "fixed", 1:"parallax" };

BackgroundSettings.defaultProps = {
    "type": "Layout",
    "backgroundSettings": {
            "background media type": Object.assign(mediaTypes),
            "items": {
                "scroll effects": Object.assign(overlay),
                "color overlay": Object.assign(colors),
                "filters": Object.assign({"photoFilter": photoFilter}, {strength: 50}),
                "color behind image": Object.assign(colors),
            }
    }
};   

BackgroundSettings.propTypes = {
  type: PropTypes.string,
  backgroundSettings: PropTypes.object
};

export default BackgroundSettings;