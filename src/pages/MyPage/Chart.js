import React, { useEffect, useState } from 'react';
import { getWBOfStudent } from '../../utils/api/student';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
const Chart = ({ groupIds, date }) => {
  console.log('date', date);
  // console.log('groupIds', groupIds);
  // Provide default value
  const [scoreArr, setScoreArr] = useState([]);
  const [arr, setArr] = useState([]);
  // const test = groupIds.groupIds[0];
  // console.log('test', test);
  const test = groupIds;
  // console.log('test', test);
  useEffect(() => {
    const fetchScore = async (test) => {
      await getWBOfStudent(test).then((res) => {
        setScoreArr(res.data);
        console.log('score', scoreArr);
      });
    };

    fetchScore(test); // 수정된 부분
  }, [test, date]);

  const showscore = scoreArr.map((data) => data.score);

  const recentScores = scoreArr.slice(-date);

  return (
    <div>
      <h1></h1>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          data={recentScores}
          margin={{
            top: 15,
            right: 30,
            left: 0,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="number" />
          <YAxis tick={{ fontFamily: 'DXSamgakGimbap Bold', color: 'black' }} />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="score" stroke="#127FFF" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
