# frozen_string_literal: true

# Filter for sorting a hash of grouped arrays
module SortByArray
  def sort_by_array(input, property, property_order_array)
    input.sort_by do |group|
      index = property_order_array.index group[property]
      if index.nil?
        property_order_array.size + 1
      else
        index
      end
    end
  end
end

Liquid::Template.register_filter(SortByArray)
