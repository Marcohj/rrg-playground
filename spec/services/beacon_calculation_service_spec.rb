require 'rails_helper'

describe BeaconCalculationService do
  subject { described_class.new(quantity: quantity) }

  let(:quantity)       { 0 }
  let(:expected_price) { 0.0 }

  describe '#total_price' do
    context 'when quantity is 0' do
      it 'returns 0' do
        expect(subject.total_price).to eq expected_price
      end
    end


    context 'when quantity is nil' do
      let(:quantity) { nil }

      it 'returns 0' do
        expect(subject.total_price).to eq expected_price
      end
    end

    context 'when quantity is invalid' do
      let(:quantity) { 'abc' }

      it 'returns 0' do
        expect(subject.total_price).to eq expected_price
      end
    end

    context 'when quantity is 4' do
      let(:quantity)       { 4 }
      let(:expected_price) { BeaconCalculationService::BEACON_PRICE * quantity }

      it 'returns the total price' do
        expect(subject.total_price).to eq expected_price
      end
    end

    context 'when quantity is 5 or above' do
      let(:quantity)       { 5 }
      let(:expected_price) { 127.5 }

      it 'returns the total price with a discount' do
        expect(subject.total_price).to eq expected_price
      end
    end
  end
end
