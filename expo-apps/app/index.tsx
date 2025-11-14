import { FlatList, Image, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { offers } from "@/constants";
import React, { Fragment } from "react";
import cn from "clsx";
import { Ionicons } from "@expo/vector-icons";

export default function Index() {
  return (
    <SafeAreaView>
      <FlatList
        data={offers}
        renderItem={({ item, index }) => {
          const isEven = index % 2 === 0;

          return (
            <View>
              <Pressable
                className={cn("offer-card", isEven ? "flex-row-reverse" : "flex-row")}
                style={{ backgroundColor: item.color }}
              >

                {({ pressed }) => (
                  <Fragment>
                    <View className={"h-full w-1/2"}>
                      <Image source={item.image} className={"size-full"} resizeMode={"contain"} />
                    </View>

                    <View className="offer-card__info">
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
      />
    </SafeAreaView>
  );
}