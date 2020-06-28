const maxHeartRate = 187;
const restHearRate = 60;
const easyZoneConstant = 0.6;
const hardZoneConstant = 0.85;

const getHardHeartRate = () => {
  return (maxHeartRate - restHearRate) * hardZoneConstant + restHearRate;
};

const getEasyHeartRate = () => {
  return (maxHeartRate - restHearRate) * easyZoneConstant + restHearRate;
};

console.log({
  RunningHardHeartRate: getHardHeartRate(),
  RunningEasyHeartRate: getEasyHeartRate(),
});
