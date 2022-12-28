import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Button,
  Text,
  TouchableOpacity,
} from 'react-native';

const NumericPad = () => {
  const [numeric, setNumeric] = useState([
    '0.00',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
  ]);

  let numbers = [
    {id: 1},
    {id: 2},
    {id: 3},
    {id: 4},
    {id: 5},
    {id: 6},
    {id: 7},
    {id: 8},
    {id: 9},
    {id: '.'},
    {id: 0},
  ];

  useEffect(() => {
    // alert(JSON.stringify(passwords));
  }, [numeric]);

  const _onPressNumber = num => {
    let tempCode = [...numeric];
    for (var i = 0; i <= tempCode.length; i++) {
      if (tempCode[i] === '') {
        if (tempCode.includes('.')) {
          console.log('masti na kr');

          if (num <= 9) {
            console.log('masti na krli');
            tempCode[i] = num;
          }
          break;
        }
        tempCode[i] = num;
        break;
      }
    }
    console.log('Pressed', tempCode);
    setNumeric(tempCode);
  };

  const _onPressCancel = () => {
    let tempCode = [...numeric];
    for (var i = tempCode.length - 1; i >= 0; i--) {
      if (tempCode[i] != '' || tempCode[i] == '0' || tempCode[i] == '.') {
        tempCode[i] = '';
        break;
      } else {
        continue;
      }
    }

    console.log('cancel', tempCode);
    setNumeric(tempCode);
  };

  return (
    <View style={{height: '100%', width: '100%'}}>
      <View style={[{flex: 1, backgroundColor: 'lightblue'}, styles.input]}>
        <View>
          <Text
            style={{
              fontSize: 50,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            {' '}
            Rs. {''}
          </Text>
        </View>

        {numeric.map((p, index) => {
          return (
            <TouchableOpacity>
              <Text style={{fontSize: 45, color: 'black'}} key={index}>
                {p}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
      <View style={{flex: 5, backgroundColor: 'white'}}>
        <View style={styles.numbersConatiner}>
          {numbers.map(num => {
            return (
              <TouchableOpacity
                style={styles.number}
                key={num.id}
                onPress={() => _onPressNumber(num.id)}>
                <Text style={styles.numberText}>{num.id}</Text>
              </TouchableOpacity>
            );
          })}

          <TouchableOpacity style={styles.number}>
            <Text style={styles.numberText} onPress={() => _onPressCancel()}>
              x
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    fontWeight: 'bold',
  },
  number: {
    width: 95,
    height: 95,
    borderRadius: 95,
    margin: 14,
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignItems: 'center',
  },

  numbersConatiner: {
    marginTop: 28,
    width: 384,
    height: 490,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: 'white',
  },

  numberText: {
    fontSize: 56,
    color: 'purple',
    letterSpacing: 0,
    alignItems: 'center',
    justifyContent: 'center',
    left: 0,
  },
});

export default NumericPad;
