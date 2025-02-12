interface iTrack {
  name: string;
  artistName: string;
  albumName: string;
  contentIndicator: string;
  playbackSeconds: number;
  images: { url: string }[];
  message: string;
}

interface iProps {
  track: iTrack;
}

export function TrackInfo({track}: iProps) {
  return (
    <div className="mt-8 bg-gray-900 p-6 rounded-lg shadow-lg w-full max-w-lg">
      <h2 className="text-2xl font-semibold text-green-400 mb-4">Track Info</h2>
      <ul className="space-y-2">
        <li>{`Track Name: ${track.name}`}</li>
        <li>{`Artist Name: ${track.artistName}`}</li>
        <li>{`Album Name: ${track.albumName}`}</li>
        <li>{`Content Indicator: ${track.contentIndicator}`}</li>
        <li>{`Playback Seconds: ${track.playbackSeconds}`}</li>
        <li>
          <span>Cover Image:</span>
          <img
            src={track.images[0].url}
            alt={track.name}
            width={200}
            className="mt-2 rounded-lg w-full max-w-xs"
          />
        </li>
      </ul>
    </div>
  );
}
