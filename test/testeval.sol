//SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;


contract TestEval {
     string private name="Alice";
      function getName()public view returns (string memory){
        return name;
     }

}