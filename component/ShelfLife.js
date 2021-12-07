import React from 'react';
import type {Node} from 'react';
import {StyleSheet, View, TextInput} from 'react-native';
import Svg, {G, Circle} from 'react-native-svg';

function gradientColor(percentage) {
  let hue = ((100 - percentage) * 1.2).toString(10);
  return ['hsl(', hue, ',100%,50%)'].join('');
}

const Donut = (props): Node => {
  const halfCircle = props.radius + props.strokeWidth;
  const circleCircumference = 2 * Math.PI * props.radius;
  const maxPerc = (100 * props.percentage) / props.max;
  const strokeDashoffset =
    circleCircumference - (circleCircumference * maxPerc) / 100;
  console.log(halfCircle);
  console.log(circleCircumference);
  console.log(maxPerc);
  console.log(strokeDashoffset);

  return (
    <View style={styles.container}>
      <Svg
        width={props.radius * 2}
        height={props.radius * 2}
        viewBox={`0 0 ${halfCircle * 2} ${halfCircle * 2}`}>
        <G rotation="-90" origin={`${halfCircle}, ${halfCircle}`}>
          <Circle
            cx="50%"
            cy="50%"
            stroke={gradientColor(props.percentage)}
            strokeWidth={props.strokeWidth}
            r={props.radius}
            fill="transparent"
            opacity={0.2}
          />
          <Circle
            cx="50%"
            cy="50%"
            stroke={gradientColor(props.percentage)}
            strokeWidth={props.strokeWidth}
            r={props.radius}
            fill="transparent"
            strokeDasharray={circleCircumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
          />
        </G>
      </Svg>
      <TextInput
        underlineColorAndroid="transparent"
        editable={false}
        defaultValue={props.percentage.toString()}
        fontSize={props.radius / 2}
        style={[
          StyleSheet.absoluteFillObject,
          {color: gradientColor(props.percentage)},
          styles.DonutTextInput,
        ]}
      />
    </View>
  );
};

Donut.defaultProps = {
  radius: 40,
  strokeWidth: 10,
  duration: 500,
  color: 'tomato',
  delay: 500,
  textColor: 'tomato',
  max: 100,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  DonutTextInput: {
    fontWeight: '900',
    textAlign: 'center',
  },
});

export {Donut};
