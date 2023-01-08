import { Control, DomUtil } from "leaflet";
import { useMap } from "react-leaflet";
import { useEffect } from "react";

export const LeafletCustomControl = () => {
  const mapContainer = useMap();

  const CustomControl = Control.extend({
    options: {
      position: "topright",
    },
    onAdd: function () {
      const el = DomUtil.create("div");

      el.className = "h-16 w-16 bg-pink-600";

      el.onclick = function () {
        alert("hello world");
      };

      return el;
    },
    onRemove: function () {
      return;
    },
  });

  const customControl = new CustomControl();

  useEffect(() => {
    mapContainer.addControl(customControl);
  }, []);

  return null;
};
