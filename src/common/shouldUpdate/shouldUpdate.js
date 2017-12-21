export default ({ force, expired, empty, loading }) => !loading && (force || expired || empty);
