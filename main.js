/*
   Copyright 2020 Alexander Stokes

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/

const ReedSolomonEncoder = require('./lib/ReedSolomonEncoder');
const ReedSolomonDecoder = require('./lib/ReedSolomonDecoder');

const {
  GF16,
  GF64,
  GF256,
  GF1024,
  GF4096
} = require('./lib/GaloisField');

module.exports = {
  ReedSolomonEncoder,
  ReedSolomonDecoder,
  GF16,
  GF64,
  GF256,
  GF1024,
  GF4096
};
