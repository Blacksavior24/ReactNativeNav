import React from "react";
import { Text, View } from "react-native";
import PropTypes from 'prop-types'

const Saludar = (props) =>{
    const {name} = props    
    return <Text>Hola, {name}</Text>
}

Saludar.defaultProps = {
    name : 'Wardev'
}

Saludar.propTypes = {
    name: PropTypes.string.isRequired,
    
}

export default Saludar