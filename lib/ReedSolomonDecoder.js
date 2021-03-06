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

const GaloisFieldPolynomial = require('./GaloisFieldPolynomial');
const BerlekampMassey = require('./BerlekampMassey');

function ReedSolomonDecoder(field, array, BLOCKS_ECC) {
  const rsSyndrome = GaloisFieldPolynomial.from(field, array, BLOCKS_ECC);
  if (rsSyndrome.zero()) return false;

  const that = new BerlekampMassey(rsSyndrome, BLOCKS_ECC);
  const R = BLOCKS_ECC / 2;
  while (that.r.coefficients.length >= R)
    if (that.calculate()) return true;

  if (that.t.constantCoefficient() === 0) return true;

  return that.repair(array);
}

module.exports = ReedSolomonDecoder;
