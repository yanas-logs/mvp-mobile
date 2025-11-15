import { FlatList, Image, Pressable, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { offers } from "@/constants";
import React, { Fragment } from "react";
import cn from "clsx";
import { Ionicons } from "@expo/vector-icons";
import CartButton from "@/components/CartButton";

export default function Index() {
  return (
    <SafeAreaView className="flex-1 bg-white">

      <FlatList
        data={offers}
        renderItem={({ item, index }) => {
          const isEven = index % 2 === 0;

          return (
            <View>
              <Pressable
                className={cn("offer-card", isEven ? "flex-row-reverse" : "flex-row")}
                style={{ backgroundColor: item.color }}
                android_ripple={{ color: "#fffff22" }}
              >

                {({ pressed }) => (
                  <Fragment>
                    <View className={"h-full w-1/2"}>
                      <Image source={item.image} className={"size-full"} resizeMode={"contain"} />
                    </View>

                    <View className={cn("offer-card__info", isEven ? "pl-10" : "pr-10")}>
                      <Text className="h1-bold text-white leading-tight">{item.title}</Text>
                    </View>

                    <Ionicons
                      name="arrow-forward"
                      size={24}
                      color="white"
                    />

                  </Fragment>
                )}
              </Pressable>
            </View>
          )
        }}
        contentContainerClassName="pb-28 px-5"
        ListHeaderComponent={() => (
          <View className="flex-between flex-row w-full my-5">
            <View className="flex-start">
              <Text className="small-bold text-primary ">Deliver To</Text>

              <TouchableOpacity>
                <Text className="paragraph-bold flex-center flex-row gap-x-1 mt-0.5">Indonesia</Text>
                <Ionicons name="location-sharp" size={3} color="#FF6C00" />
              </TouchableOpacity>
            </View>

            <CartButton />
          </View>
        )}
      />

    </SafeAreaView>
  );
}