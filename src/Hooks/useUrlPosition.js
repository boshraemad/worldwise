import { useSearchParams } from "react-router-dom"

export default function useUrlPosition() {
    const [searchQuery]=useSearchParams();
    const mapLat=searchQuery.get("lat");
    const mapLng=searchQuery.get("lng");
  return [mapLat , mapLng]
}
